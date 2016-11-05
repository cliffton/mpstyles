from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from custom_user.models import User


from rest_framework import serializers
from oscarapi.serializers.product import *
from oscarapi.utils import (
    OscarModelSerializer,
    overridable,
    OscarHyperlinkedModelSerializer
)
from oscar.core.loading import get_model
from random import randint


Product = get_model('catalogue', 'Product')
ProductClass = get_model('catalogue', 'ProductClass')
ProductCategory = get_model('catalogue', 'ProductCategory')
ProductAttribute = get_model('catalogue', 'ProductAttribute')
ProductAttributeValue = get_model('catalogue', 'ProductAttributeValue')
ProductImage = get_model('catalogue', 'ProductImage')
Option = get_model('catalogue', 'Option')
Partner = get_model('partner', 'Partner')


class RegistrationSerializer(serializers.Serializer):
    first_name = serializers.CharField(required=True)
    last_name = serializers.CharField(required=True)
    contact_number = serializers.CharField(
        required=True,
        validators=[UniqueValidator(queryset=User.objects.all())]
    )
    email = serializers.EmailField(
        required=True,
        validators=[UniqueValidator(queryset=User.objects.all())]
    )
    # dob  = serializers.CharField(required=True)
    password = serializers.CharField(required=True)


class CustomProductSerializer(OscarModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='product-detail')
    stockrecords = serializers.HyperlinkedIdentityField(
        view_name='product-stockrecord-list')
    attributes = ProductAttributeValueSerializer(
        many=True, required=False, source="attribute_values")
    categories = serializers.StringRelatedField(many=True, required=False)
    product_class = serializers.StringRelatedField(required=False)
    images = ProductImageSerializer(many=True, required=False)
    # price = serializers.HyperlinkedIdentityField(view_name='product-price')
    # availability = serializers.HyperlinkedIdentityField(
    #     view_name='product-availability')
    options = OptionSerializer(many=True, required=False)
    # recommended_products = RecommmendedProductSerializer(
    #     many=True, required=False)

    # TODO: Remove after proper is fixed.
    price = serializers.SerializerMethodField()
    availability = serializers.SerializerMethodField()


    def get_price(self, obj):
        return randint(100,5000)

    def get_availability(self, obj):
        return_dict = {
            0: "Sold Out",
            1: "In Stock",
            2: "Limited"
        }
        return return_dict[randint(0,2)]

    class Meta:
        model = Product
        fields = overridable(
            'OSCARAPI_PRODUCTDETAIL_FIELDS',
            default=(
                'url', 'id', 'title', 'description',
                'attributes', 'categories', 'product_class',
                'stockrecords', 'images', 'price', 'availability', 'options'))

from rest_framework import serializers
from products.models import Category, SubCategory, Product


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        exclude = ('uuid', 'created', 'modified')


class SubCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = SubCategory
        exclude = ('uuid', 'created', 'modified')


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        exclude = ('uuid', 'created', 'modified')

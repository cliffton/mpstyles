from rest_framework import serializers
from products.models import (
    Category, SubCategory, Product, ProductDetail, Image)


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        exclude = ('uuid', 'created', 'modified', 'id')


class SubCategorySerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)

    class Meta:
        model = SubCategory
        exclude = ('uuid', 'created', 'modified', 'id')


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        exclude = ('uuid', 'created', 'modified', 'product_detail', 'id')


class ProductDetailSerializer(serializers.ModelSerializer):
    images = ImageSerializer(many=True, read_only=True)

    class Meta:
        model = ProductDetail
        exclude = ('uuid', 'created', 'modified', 'id', 'product')


class ProductSerializer(serializers.ModelSerializer):
    product_details = ProductDetailSerializer(read_only=True)
    subcategory = SubCategorySerializer(read_only=True)

    class Meta:
        model = Product
        exclude = ('uuid', 'created', 'modified')

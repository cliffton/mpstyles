from rest_framework import serializers


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        exclude_fields = ('uuid')


class SubCategorySerializer(serializers.ModelSerializer):
    class Meta:
        exclude_fields = ('uuid')


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        exclude_fields = ('uuid')

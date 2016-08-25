from django.shortcuts import render
from rest_framework import viewsets
from products.models import Product, ProductDetail, Image
from products.serializers import (
    ProductSerializer, ProductDetailSerializer, ImageSerializer)
# Create your views here.


class ProductViewSet(viewsets.ModelViewSet):

    serializer_class = ProductSerializer
    queryset = Product.objects.all()


class ProductDetailViewSet(viewsets.ModelViewSet):

    serializer_class = ProductDetailSerializer
    queryset = ProductDetail.objects.all()


class ImageViewSet(viewsets.ModelViewSet):

    serializer_class = ImageSerializer
    queryset = Image.objects.all()

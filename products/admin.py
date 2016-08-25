from django.contrib import admin

# Register your models here.
from products.models import (
    Category, SubCategory, Product, ProductDetail, Image)

admin.site.register(Category)
admin.site.register(SubCategory)
admin.site.register(Product)
admin.site.register(ProductDetail)
admin.site.register(Image)

from __future__ import unicode_literals

from django.db import models
from model_utils.models import TimeStampedModel
from django.utils.text import slugify
import uuid

from enum import IntEnum


# Create your models here.
class Category(TimeStampedModel):
    uuid = models.UUIDField(default=uuid.uuid4, editable=False)
    name = models.CharField(null=False, max_length=200)
    slug = models.SlugField(
        unique=True, blank=True, null=False, max_length=200)
    description = models.CharField(null=True, blank=True, max_length=200)

    class Meta:
        verbose_name = 'category'
        verbose_name_plural = '1. Categories'

    def __str__(self):
        return self.name

    def __unicode__(self):
        return u'%s' % self.name

    def save(self, *args, **kwargs):
        if not self.pk:
            self.slug = slugify(self.name)
        super(Category, self).save(*args, **kwargs)


class SubCategory(TimeStampedModel):
    uuid = models.UUIDField(default=uuid.uuid4, editable=False)
    name = models.CharField(null=False, max_length=200)
    slug = models.SlugField(
        unique=True, blank=True, null=False, max_length=200)
    description = models.CharField(null=True, blank=True, max_length=200)

    # Relations
    category = models.ForeignKey(Category, related_name='subcategories')

    class Meta:
        verbose_name = 'subcategory'
        verbose_name_plural = '2. SubCategories'

    def __str__(self):
        return self.name

    def __unicode__(self):
        return u'%s' % self.name

    def save(self, *args, **kwargs):
        if not self.pk:
            self.slug = slugify(self.name)
        super(SubCategory, self).save(*args, **kwargs)


class Product(TimeStampedModel):
    uuid = models.UUIDField(default=uuid.uuid4, editable=False)

    # Need to decide how to make the SKU
    code = models.CharField(null=False, max_length=50)

    name = models.CharField(null=False, max_length=200)
    slug = models.SlugField(
        unique=True, blank=True, null=False, max_length=200)
    description = models.CharField(null=True, blank=True, max_length=200)

    # Relations
    # category = models.ForeignKey(Category, related_name='products')
    subcategory = models.ForeignKey(SubCategory, related_name='products')

    class Meta:
        verbose_name = 'product'
        verbose_name_plural = '3. Products'

    def __str__(self):
        return self.name

    def __unicode__(self):
        return u'%s' % self.name

    def save(self, *args, **kwargs):
        if not self.pk:
            self.slug = slugify(self.name)
        super(Product, self).save(*args, **kwargs)


# class ProductDetail(TimeStampedModel):
#     uuid = models.UUIDField(default=uuid.uuid4, editable=False)

#     # Relations
#     product = models.ForeignKey(Product, related_name='product_details')

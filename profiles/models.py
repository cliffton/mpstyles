from __future__ import unicode_literals

from django.db import models


from django.contrib.auth.models import AbstractUser
from rest_framework.authtoken.models import Token
import uuid


# Create your models here.


class User(AbstractUser):
    contact_number = models.CharField(max_length=13, unique=True, default=None, null=True)
    uuid = models.UUIDField(default=uuid.uuid4, editable=False)
    dob = models.DateField(blank=True, null=True)
    is_verified = models.BooleanField(default=False)
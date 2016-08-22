from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from profiles.models import User


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

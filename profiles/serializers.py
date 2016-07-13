from rest_framework import serializers


class RegistrationSerializer(serializers.Serializer):
	first_name = serializers.CharField(required=True)
	last_name = serializers.CharField(required=True)
	contact_number = serializers.CharField(required=True)
	email = serializers.EmailField(required=True)
	# dob  = serializers.CharField(required=True)
	password = serializers.CharField(required=True)

from django.shortcuts import render
from django.utils.translation import get_language
from oscarapi.views import basic
from oscarapi.serializers.product import ProductSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http.response import JsonResponse
from custom_user.models import User
from custom_api.serializers import RegistrationSerializer
from rest_framework import status
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token


# Create your views here.

class ProductList(basic.ProductList):
    serializer_class = ProductSerializer

    def get_queryset(self):
        language = get_language()

        return super(ProductList, self).get_queryset().filter(
            locale=to_locale(language))


class RegistrationView(APIView):

    def post(self, request):
        registration = RegistrationSerializer(data=request.data)
        registration.is_valid(raise_exception=True)
        user, _ = User.objects.get_or_create(**registration.data)
        user.set_password(registration.data['password'])
        user.save()
        response = {
            "username": user.contact_number,
            "success": True
        }
        return JsonResponse(response, status=status.HTTP_200_OK)


class LoginView(APIView):

    def post(self, request):
        username = request.data['username']
        password = request.data['password']
        user = authenticate(username=username, password=password)
        if user:
            token, _ = Token.objects.get_or_create(user=user)
            return JsonResponse(
                {'token': token.key}, status=status.HTTP_200_OK)
        else:
            return JsonResponse(
                {'error': 'Invalid credentials'},
                status=status.HTTP_400_BAD_REQUEST
            )

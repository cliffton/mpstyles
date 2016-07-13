from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from profiles.models import User
from profiles.serializers import RegistrationSerializer
from rest_framework import status
from django.contrib.auth import authenticate

class RegistrationView(APIView):

    def post(self, request):
        registration = RegistrationSerializer(data=request.data)
        registration.is_valid(raise_exception=True)
        user, _ = User.objects.get_or_create(**registration.data)
        return Response({}, status=status.HTTP_200_OK)


class LoginView(APIView):

    def post(self, request):
        username = request.data['username']
        password = request.data['password']
        user = authenticate(username=username, password=password)
        return Response({'token': user.uuid}, status=status.HTTP_200_OK)
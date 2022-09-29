from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from .serializers import RegisterUsersSerializer, NewUserSerializer
from rest_framework import generics
from users.models import NewUser
# Create your views here.

class CustomUserCreate(APIView):
	permission_classes = [AllowAny]

	def post(self, request):
		reg_serializaer = RegisterUsersSerializer(data=request.data)
		if reg_serializaer.is_valid():
			newuser = reg_serializaer.save()
			if newuser:
				return Response(status=status.HTTP_201_CREATED)
		return Response(reg_serializaer.errors, status=status.HTTP_400_BAD_REQUEST)


#Usuarios

class UserList(generics.ListCreateAPIView):
	queryset = NewUser.objects.all()
	serializer_class = NewUserSerializer

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
	queryset = NewUser.objects.all()
	serializer_class = NewUserSerializer
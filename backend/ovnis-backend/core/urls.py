"""core URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from rest_framework_simplejwt.views import (TokenObtainPairView, TokenRefreshView)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('ovnis_api.urls', namespace="ovnis_api")), #Raiz de Endpoints del API de consejo
    path('api/user/', include('users.urls', namespace="users")), #Redirecciona a users con el unico endpoint de crear usuario
    path('api-auth/', include('rest_framework.urls', namespace="rest_framework")), 
    path('auth/jwt/create/', TokenObtainPairView.as_view(), name="token_obtain_pair"), #Endpoint para enviar los datos de un usuario y obtener el token de inicio de sesión
    path('api/token/refresh', TokenRefreshView.as_view(), name='token_refresh'), #Endpoint para refrescar el token
]

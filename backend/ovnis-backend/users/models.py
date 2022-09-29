from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
# Create your models here.

class CustomAccountManager(BaseUserManager):

	def create_superuser(self, email, user_name, first_name, password, **other_fields):
		other_fields.setdefault('is_staff', True)
		other_fields.setdefault('is_superuser', True)
		other_fields.setdefault('is_active', True)

		return self.create_user(email, user_name, first_name, password, **other_fields)

	def create_user(self, email, user_name, first_name, password, **other_fields):
		if not email:
			raise ValueError(_('Debes ingresar un correo'))
		email = self.normalize_email(email)
		user = self.model(email=email, user_name=user_name, first_name=first_name, **other_fields)
		user.set_password(password)
		user.save()
		return user

class NewUser(AbstractBaseUser, PermissionsMixin):
	email = models.EmailField(_('correo'), unique=True)
	user_name = models.CharField(max_length=150, unique=True)
	first_name = models.CharField(max_length=150, blank=True)
	last_name = models.CharField(max_length=150, blank=True)
	CI = models.CharField(max_length=150, blank=True)
	phone = models.CharField(max_length=20, blank=True)
	start_date = models.DateTimeField(default=timezone.now)
	about = models.TextField(_('sobre'), max_length=500, blank=True)
	is_staff = models.BooleanField(default=False)
	is_active=models.BooleanField(default=True)

	objects = CustomAccountManager()

	USERNAME_FIELD = 'email'
	REQUIRED_FIELDS = ['user_name', 'first_name']
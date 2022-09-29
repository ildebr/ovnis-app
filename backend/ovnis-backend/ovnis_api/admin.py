from django.contrib import admin

# Register your models here.
from .models import Sighting, Comment

admin.site.register(Sighting)
admin.site.register(Comment)
from rest_framework import serializers
from .models import Sighting, Comment
from users.models import NewUser

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewUser
        fields = ("user_name",)

class SightingSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model= Sighting
        fields= ('id','description', 'latitude', 'longitude','date','user', 'country','continent')

class CommentSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Comment
        fields = ('date', 'text', 'sighting', 'user')
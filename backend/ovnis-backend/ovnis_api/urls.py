from django.urls import path
from .views import SightingList, SightingDetail, CommentList, SightingUserList
from django.conf.urls.static import static
from django.conf import settings
app_name = 'consejo_api'

urlpatterns = [
    path('sightings/', SightingList.as_view(), name="sighting-list"),
    path('sightings/<str:pk>', SightingDetail.as_view(), name="sighting-detail"),
    path('sightings/user/', SightingUserList.as_view(), name="sightings-user"),
    path('comments/<str:pk>', CommentList.as_view(), name="comments"),
    
]
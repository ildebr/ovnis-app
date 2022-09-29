from django.shortcuts import render
# from requests import Response
from rest_framework import generics
from rest_framework.response import Response
from .models import Sighting, Comment
from .serializers import SightingSerializer, CommentSerializer
from rest_framework.permissions import SAFE_METHODS, IsAuthenticatedOrReadOnly
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import BasePermission, IsAuthenticated
# Create your views here.


class StandardResultPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 10

class CustomPagination(PageNumberPagination):
    page_size = 1
    
    def get_paginated_response(self,data):
        print(self.page.has_next())
        print('slef')
        print(self.get_page_number(self.request, CustomPagination))
        print('data')
        print(data)
        prev = self.page.next_page_number() if self.page.has_next() else False
        print(prev)
        print(len(data))
        return Response({
            'next': self.get_next_link(),
            'previous': self.get_previous_link(),
            'count': self.page.paginator.count,
            'hasNext': self.page.has_next(),
            'hasPrev': self.page.has_previous(),
            'prevPage' : self.page.previous_page_number() if self.page.has_previous() else False,
            'nextPage': self.page.next_page_number() if self.page.has_next() else False,
            'page': int(self.get_page_number(self.request, CustomPagination)),
            'totalPages': self.page.paginator.num_pages,
            'totalDocs': len(data),
            'results': data,
        })


class SightingList(generics.ListCreateAPIView):
    queryset = Sighting.objects.all()
    serializer_class = SightingSerializer
    pagination_class = CustomPagination

    def paginate_queryset(self, queryset):
        # print(self.request.query_params.get(self.paginator.page_query_param, None))
        if self.paginator and self.request.query_params.get(self.paginator.page_query_param, None) is None: 
            return None 
        return super().paginate_queryset(queryset)
    
    
class IsBookOwner(BasePermission):
    """
    Object-level permission to only allow seeing his own books
    """

    def has_object_permission(self, request, view, obj):

        # obj here is a Book instance
        return obj.user == request.user


class SightingUserList(generics.ListCreateAPIView):
    queryset = Sighting.objects.all()
    serializer_class = SightingSerializer
    print('p')
    def get_queryset(self):
        print(self.request.user)
        if self.request.user.is_anonymous:
            print('pp')
            return None
        sightings = Sighting.objects.filter(user=self.request.user)
        return sightings

class SightingDetail(generics.RetrieveUpdateDestroyAPIView):
	permission_classes=[IsAuthenticatedOrReadOnly]
	queryset = Sighting.objects.all()
	serializer_class =SightingSerializer

class CommentList(generics.ListCreateAPIView):
    queryset= Comment.objects.all()
    serializer_class = CommentSerializer
    pagination_class = StandardResultPagination

    # def paginate_queryset(self, queryset):
    #     # print(self.request.query_params.get(self.paginator.page_query_param, None))
    #     if self.paginator and self.request.query_params.get(self.paginator.page_query_param, None) is None: 
    #         return None 
    #     return super().paginate_queryset(queryset)

    def get_queryset(self):
        p = self.request.path
        lid = p.split('/')
        if ( lid[3] ):
            print('here')
            queryset = Comment.objects.filter(sighting=lid[3])
            return queryset
        return None
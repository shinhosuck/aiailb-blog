from django.urls import path 
from blogs.views import (
    home_view,
    blog_list_view,
    new_blog_view,
    blog_detail_view
)


app_name = "blogs"


urlpatterns = [
    path('', home_view, name='home'),
    path('blogs', blog_list_view, name='all-blogs'),
    path('new/blog', new_blog_view, name='new-blog'),
    path('blog/detail/<str:id>', blog_detail_view, name='blog-detail')
]
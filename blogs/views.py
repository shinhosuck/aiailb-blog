from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
import random


def home_view(request):
    return render(request, 'blogs/home.html', context=None)


def blog_list_view(request):
    title = 'What is Lorem Ipsum?'
    article = """
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
        like Aldus PageMaker including versions of Lorem Ipsum."""
    
    new_str = ' '.join(article.split()[0:int(len(article.split()) * 0.6)])
    article = new_str

    blog_list = [
        {'id': 1, 'title': title, 'content': article, 'likes': random.randint(0, 100), 'dislikes': random.randint(0, 5)},
        {'id': 2, 'title': title, 'content': article, 'likes': random.randint(0, 100), 'dislikes': random.randint(0, 5)},
        {'id': 3, 'title': title, 'content': article, 'likes': random.randint(0, 100), 'dislikes': random.randint(0, 5)},
        {'id': 4, 'title': title, 'content': article, 'likes': random.randint(0, 100), 'dislikes': random.randint(0, 5)},
        {'id': 5, 'title': title, 'content': article, 'likes': random.randint(0, 100), 'dislikes': random.randint(0, 5)},
    ]
    data = {
        'blog_list': blog_list
    }
    return JsonResponse(data)


def new_blog_view(request):
    print(request.is_ajax())
    title = request.POST.get('title')
    content = request.POST.get('content')
    if title and content:
        return JsonResponse(data={'title':title, 'content': content})
    else:
        print("redirecting")
        return redirect('blogs:home')


def blog_detail_view(request, id):
    print(id)
    return render(request, 'blogs/blog_detail.html', context=None)
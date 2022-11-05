from django.urls import path
#from django.views.generic import TemplateView

from . import views

from django.views.generic import TemplateView

urlpatterns = [
    path(
        "",
        # views.ReminderListView.as_view(),
        # name = "reminder-list"
        TemplateView.as_view(template_name = "reminder/base.html"),
        name = "home"
    ),
]

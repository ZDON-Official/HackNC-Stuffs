from django.shortcuts import render

# Create your views here.

# view reminder list

from django.views.generic import (
    ListView,
)

from .models import Reminder

class ReminderListView(ListView):
    model = Reminder
    queryset = Reminder.objects.all().order_by("box", "-date_created")

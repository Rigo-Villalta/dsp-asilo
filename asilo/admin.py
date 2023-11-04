from django.contrib import admin

from .models import Cita, Doctor, Paciente

admin.site.register(Doctor)
admin.site.register(Paciente)
admin.site.register(Cita)

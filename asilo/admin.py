from django.contrib import admin
from django.utils.translation import gettext_lazy as _

from .models import  Medico, Paciente, Cita


admin.site.register(Cita)
admin.site.register(Medico)
admin.site.register(Paciente)

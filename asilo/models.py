from django.db import models


class Doctor(models.Model):
    """
    Figura de Dr. Ya que el usuario que registra las citas puede ser
    diferente al Dr.
    """

    nombre = models.CharField(max_length=100)
    apellidos = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.apellidos}, {self.nombre}"


class Paciente(models.Model):
    nombre = models.CharField(max_length=100)
    apellidos = models.CharField(max_length=100)
    fecha_de_nacimiento = models.DateField()
    notas = models.TextField()

    def __str__(self):
        return f"{self.apellidos}, {self.nombre}"


class Cita(models.Model):
    doctor = models.ForeignKey(to=Doctor, on_delete=models.PROTECT)
    paciente = models.ForeignKey(to=Paciente, on_delete=models.PROTECT)
    fecha = models.DateField()
    notas = models.TextField()

    def __str__(self):
        return f"{self.paciente} - {self.fecha}"

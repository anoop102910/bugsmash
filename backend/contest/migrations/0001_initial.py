# Generated by Django 3.2.25 on 2025-02-19 19:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
                ('description', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Problem',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=255)),
                ('slug', models.SlugField(unique=True)),
                ('description', models.TextField()),
                ('difficulty', models.CharField(max_length=255)),
                ('acceptance', models.FloatField()),
                ('frequency', models.FloatField()),
                ('test_cases', models.JSONField()),
                ('constraints', models.JSONField()),
                ('status', models.CharField(default='Easy', max_length=255)),
                ('time_limit', models.FloatField()),
                ('memory_limit', models.FloatField()),
                ('category', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='problems.category')),
            ],
        ),
    ]

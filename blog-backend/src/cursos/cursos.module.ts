import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CursosController } from './cursos.controller';
import { CursosService } from './cursos.service';
import { Curso, CursoSchema } from './schemas/curso.schema';
import { Contenido, ContenidoSchema } from './schemas/contenido.schema';
import { from } from 'rxjs';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Curso.name, schema: CursoSchema},
    { name: Curso.name, schema: CursoSchema},
  ])],
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}

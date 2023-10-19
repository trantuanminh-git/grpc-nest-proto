import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './co/product/product.module';
import { ProductController } from './product/product.controller';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [AuthModule, ProductModule, OrderModule],
  controllers: [AppController, ProductController],
  providers: [AppService],
})
export class AppModule {}

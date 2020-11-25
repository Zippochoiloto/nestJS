import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreatePostDTO, updatePostDTO } from "./dto/postdto";
import { PostService } from './postService'


@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {

  }

  @Get()
  async getAllPosts() {
    return this.postService.getAllPost();
  }

  @Get(':id')
  async getPostById(@Param('id')id: string){
    return this.postService.getPostById(id)
  }

  @Post(':id')
  async createPost(@Body() post:CreatePostDTO) {
    // return this.postService.getPostById(post);
  }

  @Put(':id')
  async updatePostById(@Param('id') id: string, @Body() post: updatePostDTO) {
    // return this.postService.getPostById(id, post);
  }

  @Delete('id')
  async deletePost(@Param('id')id: string) {
    // return this.postService.getPostById()
  }
}
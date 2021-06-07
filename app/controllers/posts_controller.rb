class PostsController < ApplicationController

  def index
    @posts = Post.order(id: "DESC")
    # orderメソッドで降順にしている
  end

  def new
  end

  def create
    Post.create(content: params[:content])
  end
end

class PostsController < ApplicationController

  def index
    @posts = Post.order(id: "DESC")
    # orderメソッドで降順にしている
  end

  # def new
  # end

  def create
    binding.pry
    Post.create(content: params[:content])
    redirect_to action: :index  
    # 投稿した後にリダレクトするようにする
    # レスポンスでindex.html.erbを返すように指定
  end
end

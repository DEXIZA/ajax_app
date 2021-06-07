class PostsController < ApplicationController

  def index
    @posts = Post.order(id: "DESC")
    # orderメソッドで降順にしている
  end

  # def new
  # end

  def create
    post = Post.create(content: params[:content])
    # renderメソッドを用いて、レスポンスのデータフォーマットとしてJSONを指定
    # 新たに投稿されたメモの内容を変数postに格納
    redirect_to action: :index  
    # 投稿した後にリダレクトするようにする
    # レスポンスでindex.html.erbを返すように指定
  end
end

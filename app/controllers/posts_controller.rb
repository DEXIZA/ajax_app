class PostsController < ApplicationController

  def index
    @posts = Post.order(id: "DESC")
    # orderメソッドで降順にしている
  end

  # def new
  # end

  def create
    post = Post.create(content: params[:content])
    # 新たに投稿されたメモの内容を変数postに格納
      # renderメソッドを用いて、レスポンスのデータフォーマットとしてJSONを指定したい為にpostに代入
      # データベースのカラムにあるデータを全て格納している
    render json:{ post: post }
    # 直前で定義した変数postの値を、postというキーとセットでJavaScriptに送信しています。
  end
end
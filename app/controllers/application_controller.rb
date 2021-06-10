class ApplicationController < ActionController::Base
  before_action :basic_auth


  private

  def basic_auth
    authenticate_or_request_with_http_basic do |username, password|
      username == 'admin' && password == '2231'
    end
  end
end


# authenticate_or_request_with_http_basicオウセンティケイト オア リクエスト ウィズ エイチティティーピー ベーシックメソッド
  # RailsアプリケーションでBasic認証を実装するために使用する、Railsのメソッドです。
  # ブロックを開き、ブロック内部でusernameとpasswordを設定することでBasic認証を利用できます。
    #   # 'admin'というユーザー名と、'password'というパスワードでBasic認証できるように設定
    #   authenticate_or_request_with_http_basic do |username, password|
    #     username == 'admin' && password == 'password'
    #   end

# username == 'ああああ' && password == 'えべべべ'
  # みたいな記述をコードに残しておくことは危険な為
  # zhhrcへ退避
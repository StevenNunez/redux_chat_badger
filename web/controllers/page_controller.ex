defmodule ReduxChatBadger.PageController do
  use ReduxChatBadger.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end

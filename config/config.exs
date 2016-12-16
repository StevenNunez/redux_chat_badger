# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :redux_chat_badger,
  ecto_repos: [ReduxChatBadger.Repo]

# Configures the endpoint
config :redux_chat_badger, ReduxChatBadger.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "SxsjZwIjYBjNvxY2/1UKvV5xOSrkl53gwAaw171Rbfy7m40apgyl4+Qmi0J4OO4g",
  render_errors: [view: ReduxChatBadger.ErrorView, accepts: ~w(html json)],
  pubsub: [name: ReduxChatBadger.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"

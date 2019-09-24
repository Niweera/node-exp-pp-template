# #!/bin/bash                                                                                                                                                                                                                                                                    
# # Create a .env file from environment variables
# # The env variables are specified in the Travis-CI settings.
cat << EOF >> app.yaml
env_variables:
  MONGO_URI: "$MONGO_URI"
  SECRET_OR_KEY: "$SECRET_OR_KEY"
EOF
pipeline {
    agent { label 'firstnode' }
    stages {
        stage("Copy Code") {
            steps {
                dir('/home/projects/nextprojects/project-tracking-admin') {
                    sh "sudo cp -r /${WORKSPACE}/** ./"
                }
            }
        }
        stage("Install Dependencies") {
            steps {
                dir('/home/projects/nextprojects/project-tracking-admin') {
                    sh "sudo npm install"
                }
            }
        }
        stage("Build Project") {
            steps {
                dir('/home/projects/nextprojects/project-tracking-admin') {
                    sh "sudo npm run build"
                }
            }
        }
        stage("PM2 Debugging") {
            steps {
                dir('/home/projects/nextprojects/project-tracking-admin') {
                    // Print PM2 version
                    sh "pm2 -v"
                    // Print PM2 list before restarting
                    sh "pm2 list"
                }
            }
        }
        stage("Start/Restart PM2 Process") {
            steps {
                dir('/home/projects/nextprojects/project-tracking-admin') {
                    // Check if process is running and start if not
                    sh """
                    if ! pm2 list | grep -q project-tracking-admin; then
                        pm2 start ecosystem.config.js --env production
                    else
                        pm2 restart project-tracking-admin --update-env
                    fi
                    pm2 save
                    """
                }
            }
        }
    }
}

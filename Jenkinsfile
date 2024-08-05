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
                    // Print environment variables
                    sh "env"
                    // Print PM2 logs for debugging
                    sh "pm2 logs project-tracking-admin"
                }
            }
        }
        stage("Restart PM2 Process") {
            steps {
                dir('/home/projects/nextprojects/project-tracking-admin') {
                    // Attempt to restart the process using the name with updated environment variables
                    sh "pm2 restart project-tracking-admin --update-env"
                }
            }
        }
    }
}

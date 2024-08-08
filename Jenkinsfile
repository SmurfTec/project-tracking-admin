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
        stage("Pm2 Process") {
            steps {
                dir('/home/projects/nextprojects/project-tracking-admin') {
                    sh "sudo npm install"
                    sh "sudo npm run build"
                    sh "sudo pm2 restart 1"
                }
            }
        }
    }
}

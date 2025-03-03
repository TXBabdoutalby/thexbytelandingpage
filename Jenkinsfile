pipeline {
    agent any

    environment {
        DOMAIN = "thexbyte.com.tn"
        PORT = "8081"
        IMAGE = "thexbyte"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/TXBabdoutalby/thexbytelandingpage.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE .'
            }
        }

        stage('Stop & Remove Old Container') {
            steps {
                sh '''
                docker stop $IMAGE || true && docker rm $IMAGE || true
                '''
            }
        }

        stage('Run New Container') {
            steps {
                sh 'docker run -d --name $IMAGE -p $PORT:80 $IMAGE'
            }
        }

        stage('Restart Apache') {
            steps {
                sh 'sudo systemctl restart apache2'
            }
        }
    }
}

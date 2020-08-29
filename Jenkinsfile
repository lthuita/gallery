pipeline {
    agent any
    environment {
        EMAIL_BODY = 
         """
            <p> EXECUTED: Job <b> \'${env.JOB_NAME} : ${env.BUILD_NUMBER})\' </b> </p>
            <p>
            View console output here: 
            "<a href="${env.BUILD_URL}">${env.JOB_NAME} :${env.BUILD_NUMBER} </a>" 
            </p>
            <p><i> (Build log is attached.) </i></p>
        """
        EMAIL_SUBJECT_SUCCESS =  "Status: 'SUCCESS' -Job \'${env.JOB_NAME}:${env.BUILD_NUMBER}\'"
        
        EMAIL_SUBJECT_FAILURE =  "Status: 'FAILURE' -Job \'${env.JOB_NAME}:${env.BUILD_NUMBER}\'"
        
        EMAIL_RECEPIENT = 'lthuita@gmail.com' 
        
    }
    tools{
        gradle 'Gradle-6'
        nodejs "node"
    }
    stages {
        stage('clone repository') {
            steps{
                git 'https://github.com/lthuita/gallery'
            }
        }
        stage ('Build project') {
            steps{
                sh 'npm install'
            }
        }
        stage('Deploy to Heroku') {
            steps {
                withCredentials([usernameColonPassword(credentialsId: 'heroku', variable: 'HEROKU_CRED' )]){
                    sh 'git push https://${HEROKU_CRED}@git.heroku.com/still-shore-08813.git master'
                }
            }
        }            
        stage('Tests') {
            steps {
                sh './test/serverTest.sh'
            }
        }
     
        
    }

    

    post {
        success {
            slackSend (color: 'good', message: "BUILD SUCCESSFUL for: Job '${env.JOB_NAME} build number #[${env.BUILD_NUMBER}]' :clinking_glasses: '. Check (${env.BUILD_URL})")

            emailext attachLog: true,
                body: EMAIL_BODY,
                subject: EMAIL_SUBJECT_SUCCESS, 
                to: EMAIL_RECEPIENT
        }
        
        
        failure {
            slackSend (color: 'danger', message: "BUILD FAILED for: Job '${env.JOB_NAME} build number #[${env.BUILD_NUMBER}]' :thinking_face: '. Check (${env.BUILD_URL})")

            emailext attachLog: true,
               body: EMAIL_BODY ,
               subject: EMAIL_SUBJECT_FAILURE, 
               to: EMAIL_RECEPIENT
        }
    }
}
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
    }
    stages {
        stage('clone repository') {
            steps{
                git 'https://github.com/lthuita/gallery'
            }
        }
        stage ('Build project') {
            steps{
                sh 'gradle build'
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
                sh 'gradle test'
            }
        }
        
      catch (err) {
          slacksend color: "danger", message: "Build failed :face_with_head_bandage: \n `${env.JOB_NAME} ${env.BUILD_NUMBER}` (<${env.BUILD_URL}|Open>)"
            throw err
      }  
        
    }
    post {
        success {
            emailext attachLog: true,
                body: EMAIL_BODY,
                subject: EMAIL_SUBJECT_SUCCESS, 
                to: EMAIL_RECEPIENT
        }
        
        failure {
            emailext attachLog: true,
               body: EMAIL_BODY ,
               subject: EMAIL_SUBJECT_FAILURE, 
               to: EMAIL_RECEPIENT
        }
    }
}
pipeline{
    agent any

    tools{
        nodejs "node"
    }

    stages{
        stage('Cypress paralled test suite'){
            parallel{
                stage('Slave Node1'){
                    agent {
                        label "remote_node3"
                    }
                    steps{
                        git  branch: 'main', url : 'git@github.com:Adnan-Aashiq/whoppit_QA.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run %Script%'
                    }
                }
                stage('Slave Node2'){
                    agent {
                        label "remote_node4"
                    }
                    steps{
                        git  branch: 'main', url : 'git@github.com:Adnan-Aashiq/whoppit_QA.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run %Script%'
                    }
                }
            }
        }
    }
}
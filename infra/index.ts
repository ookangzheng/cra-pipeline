import * as cdk from '@aws-cdk/core'

import { config } from '../config'
import { Pipeline } from './stacks/pipeline'

const app = new cdk.App()

const pipe = new Pipeline(app, 'Pipeline', config)
const customTag = {
  Owner: 'Oo Kang Zheng',
  ApplicationVersion: '1.0.0',
  Environment: 'Development',
  Product: 'Bridge',
  Group: 'Back-office',
  Application: 'CodeBuild',
  Description: 'Backoffice backend Codebuild ',
  Team: 'Sygna',
  Name: 'sygna-backoffice-backend-codebuild',
}
Object.entries(customTag).forEach(([k, v]) => {
  cdk.Tag.add(pipe, k, v)
})

app.synth()

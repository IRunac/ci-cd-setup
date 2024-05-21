const aws = require('@pulumi/aws');
const awsx = require('@pulumi/awsx');
const pulumi = require('@pulumi/pulumi');
const { Project } = require('@studion/infra-code-blocks');
// const stack = pulumi.getStack();
// console.log(stack);
const awsConfig = new pulumi.Config('aws');
const irunacConfig = new pulumi.Config('irunac');
const irunacAwsConfig = new pulumi.Config('irunacAws');

const region = awsConfig.require('region');
const domain = irunacConfig.require('domain');
const PROJECT_NAME = irunacConfig.require('projectName');
const hostedZoneId = irunacAwsConfig.require('hostedZoneId');
// const ssmPrefix = irunacAwsConfig.require('ssmPrefix');
const imageUri = '';

const frontend = {
  type: 'STATIC_SITE', serviceName: 'frontend', domain, hostedZoneId
};
const backend = {
  type: 'WEB_SERVER', serviceName: 'api', image: imageUri, domain, hostedZoneId
};
const project = new Project('demo', { services: [frontend, backend] });

module.exports = project;

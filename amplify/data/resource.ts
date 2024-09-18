import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  InitialGeometry: a
    .model({
      type: a.string(),
      name: a.string(),
      size: a.string(),
      crs: a.string(),
      geometry: a.json(),

    })
    .authorization((allow) => [allow.guest()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'iam',
  },
});



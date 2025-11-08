/**
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { genkit } from 'genkit';
import { enableFirebaseTelemetry } from '@genkit-ai/firebase';
import { vertexAI } from '@genkit-ai/vertexai';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCuh4j14SVZ8U5COlipDJAzuT6CVzccP_w',
  authDomain: 'compass-codelab-d618e.firebaseapp.com',
  projectId: 'compass-codelab-d618e',
  storageBucket: 'compass-codelab-d618e.firebasestorage.app',
  messagingSenderId: '1007750927611',
  appId: '1:1007750927611:web:9268036e9c0be5a2738c5e',
};

export const getProjectId = () => firebaseConfig.projectId;

enableFirebaseTelemetry({ projectId: getProjectId() });

export const ai = genkit({
  plugins: [
    vertexAI({
      projectId: getProjectId(),
      location: 'us-central1',
    }),
  ],
});

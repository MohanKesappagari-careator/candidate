import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('notification')
export class CandidateConsumer {
  @Process('create')
  createJob(job: Job<unknown>) {
    console.log('createCandidate1', job.data);
  }

  @Process('update')
  updateJob(job: Job<unknown>) {
    console.log('updateCandidate1', job.data);
  }
}

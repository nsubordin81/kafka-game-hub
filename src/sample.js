import { Kafka } from 'kafkajs';

// const kafka = new Kafka({
//     // logical id for the application brokers need these for quitas and request tracing
//     // should be unique for an application but can be shared across instances of an application hosted on different servers.
//     clientId: 'my-app',
//     // these are seed brokers just to bootstrap client and load metadata
//     // you can use an async function here to set the seed brockers instead of using this statically defined list. not my use case not going to get into it right now.
//     // when testing locally these should be localhost
//     brokers: ['localhost:9092', 'localhost:9092']
// })

// const producer = kafka.producer()

// await producer.connect()
// await producer.send({
//     topic: 'test-topic',
//     messages: [
//         { value: 'Hello KafkaJS user!' }
//     ],
// })

// await producer.disconnect()

// // note that the group the consumer belongs to is part of the instantiation
// const consumer = kafka.consumer({ groupId: 'test-group' })

// await consumer.connect()
// await consumer.subscribe({ topic: 'test-topic', fromBeginning: true })

// await consumer.run({
//     eachMessage: async ({ topic, partition, message}) => {
//         console.log({
//             value: message.value.toString(),
//         })
//     },
// })

const response = await fetch('https://id.twitch.tv/oauth2/token?client_id=&client_secret=&grant_type=client_credentials', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
});

// little gotcha here didn't realize json() was async
const json = await response.json();
console.log(json);

import type { UsersSeed, QuestionsToSeed } from "@/interfaces";
import { db } from ".";
import { forms, questions, users } from "./schemas";
import { hashPassword } from "@/utils/password";
import "dotenv/config";

const usersToSeed: UsersSeed[] = [
	{
		name: "Admin",
		email: "admin@formmaster.com",
		password: process.env.ADMIN_PASSWORD ?? "",
		role: "user",
		status: "active",
	},
	{
		name: "Bob",
		email: "bob@example.com",
		password: "password",
		role: "user",
		status: "active",
	},
	{
		name: "Charlie",
		email: "charlie@example.com",
		password: "password",
		role: "user",
		status: "blooked",
	},
	{
		name: "Diana",
		email: "diana@example.com",
		password: "password",
		role: "user",
		status: "active",
	},
	{
		name: "Eve",
		email: "eve@example.com",
		password: "password",
		role: "user",
		status: "active",
	},
	{
		name: "Frank",
		email: "frank@example.com",
		password: "password",
		role: "user",
		status: "active",
	},
	{
		name: "Grace",
		email: "grace@example.com",
		password: "password",
		role: "user",
		status: "blooked",
	},
	{
		name: "Hank",
		email: "hank@example.com",
		password: "password",
		role: "user",
		status: "active",
	},
	{
		name: "Ivy",
		email: "ivy@example.com",
		password: "password",
		role: "user",
		status: "blooked",
	},
	{
		name: "Jack",
		email: "jack@example.com",
		password: "password",
		role: "user",
		status: "active",
	},
	{
		name: "Kara",
		email: "kara@example.com",
		password: "password",
		role: "user",
		status: "active",
	},
	{
		name: "Leo",
		email: "leo@example.com",
		password: "password",
		role: "user",
		status: "blooked",
	},
	{
		name: "Mia",
		email: "mia@example.com",
		password: "password",
		role: "user",
		status: "active",
	},
	{
		name: "Nina",
		email: "nina@example.com",
		password: "password",
		role: "user",
		status: "active",
	},
	{
		name: "Oscar",
		email: "oscar@example.com",
		password: "password",
		role: "user",
		status: "active",
	},
	{
		name: "Paul",
		email: "paul@example.com",
		password: "password",
		role: "user",
		status: "blooked",
	},
	{
		name: "Quinn",
		email: "quinn@example.com",
		password: "password",
		role: "user",
		status: "active",
	},
	{
		name: "Rita",
		email: "rita@example.com",
		password: "password",
		role: "user",
		status: "blooked",
	},
	{
		name: "Sam",
		email: "sam@example.com",
		password: "password",
		role: "user",
		status: "active",
	},
	{
		name: "Tina",
		email: "tina@example.com",
		password: "password",
		role: "user",
		status: "blooked",
	},
];

const formsToSeed = [
	{
		author_id: 1,
		title: "What do you think about Apples?",
		topic: "Animals",
		description:
			"#This is a form about apples  \n I would like to know what do you think about apples, your opinions, your experiences and your feelings about them",
		isPublic: true,
		imageUrl: process.env.DEFAULT_IMAGE_URL ?? "",
	},
	{
		author_id: 2,
		title: "Do you like Dogs?",
		topic: "Pets",
		description:
			"#This is a form about dogs  \n I would like to know your experiences with dogs, your favorite breeds, and how they impact your life",
		isPublic: true,
		imageUrl: process.env.DEFAULT_IMAGE_URL ?? "",
	},
	{
		author_id: 3,
		title: "Your Thoughts on Climate Change?",
		topic: "Environment",
		description:
			"#This is a form about climate change  \n Share your thoughts, concerns, and actions you are taking to combat climate change",
		isPublic: true,
		imageUrl: process.env.DEFAULT_IMAGE_URL ?? "",
	},
	{
		author_id: 4,
		title: "Favorite Books of All Time",
		topic: "Literature",
		description:
			"#This is a form about favorite books  \n Tell us about your favorite books, why they are special to you, and how they have impacted your life",
		isPublic: true,
		imageUrl: process.env.DEFAULT_IMAGE_URL ?? "",
	},
	{
		author_id: 5,
		title: "Best Travel Destinations",
		topic: "Travel",
		description:
			"#This is a form about travel  \n Share your favorite travel destinations, experiences, and tips for fellow travelers",
		isPublic: true,
		imageUrl: process.env.DEFAULT_IMAGE_URL ?? "",
	},
	{
		author_id: 6,
		title: "Healthy Eating Habits",
		topic: "Health",
		description:
			"#This is a form about healthy eating  \n Share your tips, favorite recipes, and how healthy eating has improved your life",
		isPublic: true,
		imageUrl: process.env.DEFAULT_IMAGE_URL ?? "",
	},
	{
		author_id: 7,
		title: "Technological Innovations",
		topic: "Technology",
		description:
			"#This is a form about technology  \n Discuss the latest technological innovations, their impact on society, and future trends",
		isPublic: true,
		imageUrl: process.env.DEFAULT_IMAGE_URL ?? "",
	},
	{
		author_id: 8,
		title: "Music That Moves You",
		topic: "Music",
		description:
			"#This is a form about music  \n Share your favorite genres, artists, and how music influences your mood and daily life",
		isPublic: true,
		imageUrl: process.env.DEFAULT_IMAGE_URL ?? "",
	},
	{
		author_id: 9,
		title: "Fitness Routines",
		topic: "Fitness",
		description:
			"#This is a form about fitness  \n Describe your fitness routines, favorite workouts, and how you stay motivated",
		isPublic: true,
		imageUrl: process.env.DEFAULT_IMAGE_URL ?? "",
	},
	{
		author_id: 10,
		title: "The Future of Work",
		topic: "Business",
		description:
			"#This is a form about the future of work  \n Discuss trends, remote work, and how the workplace is evolving",
		isPublic: true,
		imageUrl: process.env.DEFAULT_IMAGE_URL ?? "",
	},
	{
		author_id: 11,
		title: "Learning New Languages",
		topic: "Education",
		description:
			"#This is a form about learning languages  \n Share your experiences, tips, and challenges in learning new languages",
		isPublic: true,
		imageUrl: process.env.DEFAULT_IMAGE_URL ?? "",
	},
	{
		author_id: 12,
		title: "Artistic Expressions",
		topic: "Art",
		description:
			"#This is a form about art  \n Discuss your favorite art forms, artists, and how art impacts your life",
		isPublic: true,
		imageUrl: process.env.DEFAULT_IMAGE_URL ?? "",
	},
	{
		author_id: 13,
		title: "Sustainable Living",
		topic: "Sustainability",
		description:
			"#This is a form about sustainable living  \n Share your practices, ideas, and how you contribute to a sustainable lifestyle",
		isPublic: true,
		imageUrl: process.env.DEFAULT_IMAGE_URL ?? "",
	},
	{
		author_id: 14,
		title: "Gaming Communities",
		topic: "Gaming",
		description:
			"#This is a form about gaming  \n Discuss your favorite games, communities, and how gaming has influenced your life",
		isPublic: true,
		imageUrl: process.env.DEFAULT_IMAGE_URL ?? "",
	},
	{
		author_id: 15,
		title: "Gardening Tips",
		topic: "Gardening",
		description:
			"#This is a form about gardening  \n Share your gardening tips, favorite plants, and how gardening benefits your well-being",
		isPublic: true,
		imageUrl: process.env.DEFAULT_IMAGE_URL ?? "",
	},
	{
		author_id: 16,
		title: "Cooking Adventures",
		topic: "Cooking",
		description:
			"#This is a form about cooking  \n Share your favorite recipes, cooking tips, and how cooking has become a part of your life",
		isPublic: true,
		imageUrl: process.env.DEFAULT_IMAGE_URL ?? "",
	},
	{
		author_id: 17,
		title: "Mental Health Awareness",
		topic: "Mental Health",
		description:
			"#This is a form about mental health  \n Discuss the importance of mental health, personal experiences, and ways to maintain mental well-being",
		isPublic: true,
		imageUrl: process.env.DEFAULT_IMAGE_URL ?? "",
	},
	{
		author_id: 18,
		title: "Fashion Trends",
		topic: "Fashion",
		description:
			"#This is a form about fashion  \n Share your favorite fashion trends, designers, and how fashion influences your identity",
		isPublic: true,
		imageUrl: process.env.DEFAULT_IMAGE_URL ?? "",
	},
	{
		author_id: 19,
		title: "Photography Techniques",
		topic: "Photography",
		description:
			"#This is a form about photography  \n Discuss your favorite photography techniques, equipment, and how photography has become a hobby",
		isPublic: true,
		imageUrl: process.env.DEFAULT_IMAGE_URL ?? "",
	},
	{
		author_id: 20,
		title: "Personal Finance Tips",
		topic: "Finance",
		description:
			"#This is a form about personal finance  \n Share your tips on budgeting, saving, and investing for a secure financial future",
		isPublic: true,
		imageUrl: process.env.DEFAULT_IMAGE_URL ?? "",
	},
];

const questionsToSeed: QuestionsToSeed[] = [
	{
		formId: 1,
		question: "What is your favorite type of apple?",
		description: "Please select your favorite apple variety.",
		displayInTable: true,
		order: 1,
		type: "multiple",
	},
	{
		formId: 1,
		question: "Why do you like or dislike apples?",
		description: "Share your reasons for liking or disliking apples.",
		displayInTable: false,
		order: 2,
		type: "long",
	},
	{
		formId: 1,
		question: "How often do you eat apples?",
		description: "Answer in number of times per week.",
		displayInTable: true,
		order: 3,
		type: "numeric",
	},
	{
		formId: 1,
		question: "What is your favorite way to consume apples?",
		description: "e.g., fresh, juice, pie.",
		displayInTable: true,
		order: 4,
		type: "short",
	},

	{
		formId: 2,
		question: "Do you have a dog?",
		description: "Yes or No.",
		displayInTable: true,
		order: 1,
		type: "multiple",
	},
	{
		formId: 2,
		question: "What is your favorite dog breed?",
		description: "If you have one, share your favorite breed.",
		displayInTable: false,
		order: 2,
		type: "short",
	},
	{
		formId: 2,
		question: "How many dogs have you had in your life?",
		description: "Provide the total number.",
		displayInTable: true,
		order: 3,
		type: "numeric",
	},
	{
		formId: 2,
		question: "Why do you think dogs are good companions?",
		description: "Explain the reasons why dogs make good companions.",
		displayInTable: false,
		order: 4,
		type: "long",
	},

	{
		formId: 3,
		question: "Do you believe climate change is real?",
		description: "Select Yes or No.",
		displayInTable: true,
		order: 1,
		type: "multiple",
	},
	{
		formId: 3,
		question: "What actions do you take to combat climate change?",
		description:
			"Share your actions, e.g., recycling, reducing carbon footprint.",
		displayInTable: false,
		order: 2,
		type: "long",
	},
	{
		formId: 3,
		question: "How concerned are you about climate change?",
		description: "Rate your concern on a scale of 1 to 10.",
		displayInTable: true,
		order: 3,
		type: "numeric",
	},
	{
		formId: 3,
		question: "What do you think is the biggest cause of climate change?",
		description: "Provide your opinion on the main cause.",
		displayInTable: false,
		order: 4,
		type: "short",
	},
	{
		formId: 4,
		question: "What is your favorite book?",
		description: "Name your favorite book.",
		displayInTable: true,
		order: 1,
		type: "short",
	},
	{
		formId: 4,
		question: "Why is this book special to you?",
		description: "Explain what makes the book special to you.",
		displayInTable: false,
		order: 2,
		type: "long",
	},
	{
		formId: 4,
		question: "How many books do you read per year?",
		description: "Provide the average number of books you read annually.",
		displayInTable: true,
		order: 3,
		type: "numeric",
	},
	{
		formId: 4,
		question: "Which genre do you enjoy the most?",
		description: "Select your favorite book genre.",
		displayInTable: true,
		order: 4,
		type: "multiple",
	},
	{
		formId: 5,
		question: "What is your favorite travel destination?",
		description: "Name your favorite place to visit.",
		displayInTable: true,
		order: 1,
		type: "short",
	},
	{
		formId: 5,
		question: "Why do you recommend this destination?",
		description: "Share the reasons why you recommend visiting this place.",
		displayInTable: false,
		order: 2,
		type: "long",
	},
	{
		formId: 5,
		question: "How many countries have you visited?",
		description: "Provide the total number of countries you've visited.",
		displayInTable: true,
		order: 3,
		type: "numeric",
	},
	{
		formId: 5,
		question: "What is your preferred type of travel?",
		description: "e.g., solo, family, adventure, luxury.",
		displayInTable: true,
		order: 4,
		type: "multiple",
	},
];

const formTagsToSeed = [
	{ formId: 1, tagId: 1 },
	{ formId: 1, tagId: 3 },
	{ formId: 1, tagId: 5 },
	{ formId: 2, tagId: 2 },
	{ formId: 2, tagId: 4 },
	{ formId: 2, tagId: 6 },
	{ formId: 3, tagId: 3 },
	{ formId: 3, tagId: 7 },
	{ formId: 3, tagId: 9 },
	{ formId: 4, tagId: 4 },
	{ formId: 4, tagId: 8 },
	{ formId: 4, tagId: 10 },
	{ formId: 5, tagId: 5 },
	{ formId: 5, tagId: 11 },
	{ formId: 6, tagId: 6 },
	{ formId: 6, tagId: 12 },
	{ formId: 7, tagId: 1 },
	{ formId: 7, tagId: 7 },
	{ formId: 7, tagId: 9 },
	{ formId: 8, tagId: 2 },
	{ formId: 8, tagId: 8 },
	{ formId: 8, tagId: 10 },
	{ formId: 9, tagId: 3 },
	{ formId: 9, tagId: 11 },
	{ formId: 9, tagId: 12 },
	{ formId: 10, tagId: 4 },
	{ formId: 10, tagId: 6 },
	{ formId: 10, tagId: 9 },
	{ formId: 11, tagId: 5 },
	{ formId: 11, tagId: 7 },
	{ formId: 11, tagId: 10 },
	{ formId: 12, tagId: 6 },
	{ formId: 12, tagId: 12 },
	{ formId: 13, tagId: 1 },
	{ formId: 13, tagId: 4 },
	{ formId: 13, tagId: 8 },
	{ formId: 14, tagId: 2 },
	{ formId: 14, tagId: 5 },
	{ formId: 14, tagId: 11 },
	{ formId: 15, tagId: 3 },
	{ formId: 15, tagId: 7 },
	{ formId: 16, tagId: 4 },
	{ formId: 16, tagId: 9 },
	{ formId: 17, tagId: 1 },
	{ formId: 17, tagId: 6 },
	{ formId: 18, tagId: 2 },
	{ formId: 18, tagId: 8 },
	{ formId: 19, tagId: 3 },
	{ formId: 19, tagId: 10 },
	{ formId: 20, tagId: 4 },
	{ formId: 20, tagId: 12 },
];

const seed = async () => {
	const usersToInsert = await Promise.all(
		usersToSeed.map(async (user) => ({
			...user,
			password: await hashPassword(user.password),
		})),
	);

	await db.insert(users).values(usersToInsert);
	await db.insert(forms).values(formsToSeed);
	await db.insert(questions).values(questionsToSeed);

	return "SUCCESS";
};

seed();

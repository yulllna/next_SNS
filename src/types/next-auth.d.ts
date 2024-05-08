import NextAuth, {DefaultSession} from 'next-auth';

// 기존 next-auth 모듈에 Session 타입을 재정의
declare module 'next-auth' {
    interface Session {
        user: {
            username: string;
        } & DefaultSession['user'];
    }
}
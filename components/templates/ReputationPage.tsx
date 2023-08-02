'use client';

import { getReputationsFx } from '@/api/reputation';
import { $reputations, ReputationGate } from '@/context/reputation';
import { useGate, useStore } from 'effector-react';
import styles from '@/styles/reputation.module.scss';
import Image from 'next/image';
import ReputationSkeleton from '../modules/ReputationSkeleton';

const ReputationPage = () => {
  useGate(ReputationGate);
  const reputations = useStore($reputations);
  const spinner = useStore(getReputationsFx.pending);
console.log(reputations)
  return (
    <>
        <header>
            <div className="container">
                <nav className="navbar navbar-dark">
                    <div className="d-flex align-items-center">
                        <Image
                            src='/assets/logo.png'
                            className="rounded-circle"
                            alt="Skill Blog"
                            style={{ marginRight: 15 }}
                            width={50}
                            height={50}
                        />
                        <a className="navbar-brand">Member reputation</a>
                    </div>
                </nav>
            </div>
        </header>
        <main>
            <section>
                <div className="container">
                    <div className={styles.reputations_table}>
                        <table className="table table-striped table-dark mt-2 table-bordered">
                            <thead>
                                <tr>
                                    <th>Place</th>
                                    <th>Member</th>
                                    <th>Reputation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {spinner
                                ? <ReputationSkeleton />
                                : reputations.map(({ reputation, fullName, userAvatar }, i) => (
                                    <tr key={i}>
                                        <th>{i + 1}</th>
                                        <td className={styles.full_name}>
                                            <div className={styles.full_name__inner}>
                                                <Image
                                                    src={!!userAvatar ? userAvatar : 'public/assets/logo.png'}
                                                    className="rounded-circle"
                                                    alt={fullName}
                                                    style={{ marginRight: 15 }}
                                                    width={35}
                                                    height={35}
                                                />
                                                <span>{fullName.split(' ')[1] === 'undefined' ? fullName.split(' ')[0] : fullName}</span>
                                            </div>
                                        </td>
                                        <td>{reputation}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </main>
    </>
)
};

export default ReputationPage;
